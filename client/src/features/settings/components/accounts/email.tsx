import InputField from "@/components/shared/form-field/input-field";

const EmailSection = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-4">
        <h5 className="font-semibold">Email</h5>
        <p>Invoice will be sent to this email address</p>
      </div>

      <div className="col-span-1 md:col-span-8">
        <InputField nameInSchema="email" label={"Email"} type="text" />
      </div>
    </section>
  );
};

export default EmailSection;
