import Image from "next/image";
import Layout from "../components/Layout";

const pageDetails = {
  title: "Dnata ltd",
  description: "dnata",
  keywords: "dnata",
};

function Home() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="bg-custom-blue">
        <div>
          <Image
            src="/images/banners/home.jpg"
            alt="dnata banner"
            // width={3556}
            // height={1868}
            width={1975}
            height={1038}
          />
        </div>
        <div className="h-[300px] container pt-10 px-4">
          <h1 className="text-3xl font-bold">Home page content</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
