import InputField from "@/components/shared/form-field/input-field";
import SelectField from "@/components/shared/form-field/select-field";

const LocationSection = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-4">
        <h5 className="font-semibold">Location</h5>
      </div>

      <div className="col-span-1 md:col-span-8 space-y-6">
        <InputField nameInSchema="country" label={"Country"} type="text" />
        <SelectField nameInSchema="timezone" label={"Timezone"} data={[]} />
        <InputField nameInSchema="city" label={"City"} type="text" />
      </div>
    </section>
  );
};

export default LocationSection;
