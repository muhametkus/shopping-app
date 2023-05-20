import { Modal} from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Modal
        title="Fatura Yazdır"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
      >
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
                  <div className="logo my-6">
                    <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
                  </div>
            </article>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default PrintBill;
