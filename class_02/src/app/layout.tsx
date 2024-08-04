function RootLayout(props: any) {
  return (
    <html>
      <body>
        <h1>Common</h1>
        {props.children}
      </body>
    </html>
  );
}

export default RootLayout;
