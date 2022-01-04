require("dotenv").config({ path: `.env` });
const yaml = require("yaml");
const fs = require("fs");

const chart = fs.readFileSync("./chart/Chart.yaml", "utf8");
const chartVersion = yaml.parse(chart);

module.exports = {
  branches: ["main", { name: "develop", prerelease: true }],
  repositoryUrl: "https://github.com/insuusvenerati/minecraft-status-page",
  tagFormat: "${version}",
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "semantic-release-helm",
      {
        chartPath: "./chart",
        // registry: 'registry.k8s.stiforr.tech/stiforr/treats-portfolio',
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.MD",
      },
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      // {
      //   assets: [
      //     {
      //       path: `treats-portfolio-${chartVersion.version}.tgz`,
      //       label: 'Helm Package',
      //     },
      //   ],
      // },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.MD", "chart/Chart.yaml"],
        message:
          "chore(release): [CI SKIP] ${nextRelease.version}\n\n${nextRelease.notes}",
      },
    ],
  ],
};
