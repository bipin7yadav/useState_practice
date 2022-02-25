import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "Bipin",
    sername: "Yadav",
    email: "bipinyadv9769@gmail.com",
    artwork: {
      title: "Blue Nana",
      city: "Mumbai",
      image: "https://i.imgur.com/Sd1AgUOm.jpg"
    }
  });

  return (
    <>
      <label>
        Name:
        <input
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />
      </label>
      <br />

      <label>
        Sername:
        <input
          value={form.sername}
          onChange={(e) =>
            setForm({
              ...form,
              sername: e.target.value
            })
          }
        />
      </label>
      <br />

      <label>
        City:
        <input
          value={form.artwork.city}
          onChange={(e) => {
            setForm({
              ...form,
              artwork: {
                ...form.artwork,
                city: e.target.value
              }
            });
          }}
        />
      </label>
      <br />

      <label>
        email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <h3>Name :{form.name} </h3>

      <h3>
        Sername:{form.sername} <br />
        City:{form.artwork.city}
      </h3>

      <h3>email:{form.email} </h3>
    </>
  );
}
