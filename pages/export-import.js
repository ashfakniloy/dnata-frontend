import Layout from "../components/Layout";

const pageDetails = {
  title: "Export Import page",
  description: "dnata",
  keywords: "dnata",
};

function ExportImportPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="bg-custom-blue h-screen text-center">
        <div className="container flex justify-center items-center pt-40 px-4">
          <h1 className="text-3xl font-bold">Export Import Page content</h1>
        </div>
      </div>
    </Layout>
  );
}

export default ExportImportPage;
