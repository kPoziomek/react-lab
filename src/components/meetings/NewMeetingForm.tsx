import {useState} from "react";

interface NewMeetingFormProps {
  onSubmit: (formData: { title: string; description: string }) => void;
}

export const NewMeetingForm = ({ onSubmit }: NewMeetingFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
    setFormData({title: '', description: ''});
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dodaj nowe spotkanie</h3>
      <label>Nazwa</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      />
      <label>Opis</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      ></textarea>
      <button type="submit">Dodaj</button>
    </form>
  );
};
