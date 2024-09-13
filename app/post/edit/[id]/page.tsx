import FormSection from "@/app/components/form";

const EditPost = ({ params: { id } }: { params: { id: string } }) => {
  return <FormSection id={id} />;
};

export default EditPost;
