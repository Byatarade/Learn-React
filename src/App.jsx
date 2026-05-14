import Login from "./page/Login";
import { useState } from "react";//import use state

function App() {
  return (
    <>
      <Login />
      <Cobastate />
    </>
  );
}

export function Cobastate() { //membuat function baru untuk mencoba useState
  const [count, setCount] = useState(0); //membuat state count dengan nilai awal 0

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {/* menampilkan nilai count pada halaman */}
      <h1 className="text-3xl font-bold">
        {count}
      </h1>

      <button
        onClick={() => setCount(count + 1)} //menambahkan 1 pada count setiap kali tombol diklik
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Tambah
      </button>
    </div>
  );
}

export default App;