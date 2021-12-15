export function getMinecraftAvatar(uuid, size: number = 4) {
  const imageURL = `https://crafatar.com/avatars/${uuid}?size=${size}`;

  return imageURL;
}

export async function getMinecraftAvatarFromName(name, size: number = 4) {
  const avatar = await fetch(
    `https://crafatar.com/avatars/${name}?size=${size}`
  ).catch((error) => console.error(error));

  return avatar;
}
