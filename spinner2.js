const animate = () => {
  const char = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
  let counter = -100;
  for (const element of char) {
    counter += 200;
    setTimeout(() => {
      process.stdout.write(element);
    }, counter);
  }
};

animate();