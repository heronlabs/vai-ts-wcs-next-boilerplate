export const applyBreakline = (text: string | undefined) => {
  return (
    <>
      {text?.split(/\n/g).map(line => (
        <>
          {line}
          <br />
        </>
      ))}
    </>
  );
};
