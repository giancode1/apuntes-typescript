(() => {
  const fullName = (firstName: string, lastName: (string | undefined)): string => {
    return `${firstName} ${lastName}`;
  };

  const a = fullName("Giancarlo", "Culcay");
  console.log(a);
})();
