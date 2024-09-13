export const generateNameInitials = (name: string): string => {
  if (!name) {
    return "";
  }
  const parts = name.trim().split(" ");
  let initials = "";

  if (parts.length === 1) {
    initials = parts[0][0].toUpperCase();
  } else if (parts.length === 2) {
    initials = parts.map((part) => part[0].toUpperCase()).join("");
  } else if (parts.length > 2) {
    initials =
      parts[0][0].toUpperCase() + parts[parts.length - 1][0].toUpperCase();
  }

  return initials;
};