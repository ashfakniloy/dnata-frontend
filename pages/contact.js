import Layout from "../components/Layout";

const pageDetails = {
  title: "Contact page",
  description: "dnata",
  keywords: "dnata",
};

function ContactPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="bg-custom-blue h-screen text-center">
        <div className="container flex justify-center items-center pt-40 px-4">
          <h1 className="text-3xl font-bold">ContactPage content</h1>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
