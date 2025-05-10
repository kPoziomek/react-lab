import {type ChangeEventHandler, createContext, useContext, useState} from 'react';

const EmailContext = createContext<{
  email: string;
  label: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}>({
  email: "",
  label: "",
  handleChange: () => {},
});

const EmailProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

  const [email, setEmail] = useState('poziom@agh.edu.pl');
  const [label, setLabel] = useState<string>('');
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (newEmail.length === 0) {
      setLabel('');
    } else if (newEmail.length <= 5) {
      setLabel('Ale masz krótki email');
    } else if (newEmail.length <= 10) {
      setLabel('Twój email jest odpowiedni');
    } else {
      setLabel('Ale email jest za długi');
    }
  }

  return (
    <EmailContext.Provider value={{ email, label,handleChange }}>
  {children}
  </EmailContext.Provider>
);
};

const useEmail = () => {
  return useContext(EmailContext);
};

export { EmailProvider, useEmail };
