import InputField from "@/components/shared/form-field/input-field";

const NameSection = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-4">
        <h5 className="font-semibold">Name</h5>
      </div>

      <div className="col-span-1 md:col-span-8 space-y-6">
        <InputField
          nameInSchema="first_name"
          label={"First Name"}
          type="text"
        />
        <InputField nameInSchema="last_name" label={"Last Name"} type="text" />
      </div>
    </section>
  );
};

export default NameSection;
