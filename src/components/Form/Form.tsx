/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Button from 'components/Button';
import { FormProps, Note } from 'types';
import toast from 'react-hot-toast';

function Form({ setNotes, notes }: FormProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [form, setForm] = useState({
    title: '',
    body: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'title' && value.length > 50) return;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const completeForm: Note = {
        id: +new Date(),
        ...form,
        archived: false,
        createdAt: new Date().toJSON(),
      };
      setNotes([...notes, completeForm] as Note[]);
      setForm({ title: '', body: '' });
      toast.success('Note added successfully');
    } catch (error) {
      toast.error('Error adding note');
    }
  };

  return (
    <div className="flex flex-col p-4 mx-auto max-w-[300px] md:max-w-md lg:max-w-lg xl:max-w-xl w-auto bg-[#272636] border border-primary rounded-lg justify-center">
      <form onSubmit={handleSubmit}>
        {(isFocused || form.body.length > 0) && (
          <>
            <p className="text-right text-zinc-400 text-xs">
              Title Characters Left :{` ${form.title.length.toString()}`}
              /50
            </p>
            <Input
              name="title"
              className="mb-2 input-transparent font-bold"
              placeholder="Title"
              size="medium"
              value={form.title}
              onChange={handleChange}
              required
            />
          </>
        )}
        <Textarea
          name="body"
          className="textarea-transparent resize-none"
          placeholder="Take a note..."
          cols={10}
          rows={1}
          onFocus={() => setIsFocused(true)}
          onBlur={() => form.body.length === 0 && setIsFocused(false)}
          value={form.body}
          onChange={handleChange}
          required
        />
        <div
          className={`flex justify-end mt-2.5 ${
            isFocused || form.body.length > 0 ? '' : '!hidden '
          }`}
        >
          <Button size="medium" type="submit" className="rounded-lg">
            Add Note
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
