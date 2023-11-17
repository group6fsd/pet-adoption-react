function Auth({ title, href }) {
  return (
    <>
      <li>
        <a
          href={href}
          className="text-base text-white group-hover:text-fuchsia-950 py-2 mx-8 flex lg:text-lg"
        >
          {title}
        </a>
      </li>
    </>
  );
}

export default Auth;
