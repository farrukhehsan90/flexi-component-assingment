import './App.css';
import Flexi from './Components/Flexi'
function App() {
  const flexiConfig = {
    items: [
      {
        name: "person_name",
        label: "Person's Name",
        type: 'TextField',
      },
      {
        name: "states",
        label: "Person's state",
        type: "DropDown",
        values: [
          "Maharashtra",
          "Kerala",
          "Tamil Nadu"
        ]
      }
    ],

  };

  const onSubmit = () => {
    return (
      alert('called')
    )
  }
  return (
    <>
      <Flexi value={flexiConfig} handleSubmit={onSubmit} buttonLabel='Sumbit' />
    </>
  );
}

export default App;
