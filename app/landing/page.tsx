import Wrapper from "@/app/styles/landing";
import logo from "@/public/images/logo.svg";
import main from "@/public/images/main.svg";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <Wrapper>
      <nav>
        <Image src={logo} alt="logo"></Image>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link href="/register" className="btn register-link">
            Register
          </Link>
          <Link href="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <Image src={main} width={400} height={353} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}