import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const doctors = [
  { id: "d1", name: "Dr. Anjali Verma", specialty: "Cardiologist", experience: 12, rating: 4.7, img: "/doc2.jpg" },
  { id: "d2", name: "Dr. Rohit Sharma", specialty: "Orthopedic", experience: 8, rating: 4.5, img: "/docr.png" },
  { id: "d3", name: "Dr. Meera Rao", specialty: "Dermatologist", experience: 6, rating: 4.6, img: "/doctor1.jpg" },
];

function AppHelmet({ title, description }) {
  return (
    <Helmet>
      <title>{title} — Doctor Portal</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : "https://example.com"} />
    </Helmet>
  );
}

function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-bold text-xl text-indigo-600">DocCare</span>
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-gray-700 hover:text-indigo-600">Home</Link>
              <Link to="/about" className="py-4 px-2 text-gray-700 hover:text-indigo-600">About</Link>
              <Link to="/services" className="py-4 px-2 text-gray-700 hover:text-indigo-600">Services</Link>
              <Link to="/doctors" className="py-4 px-2 text-gray-700 hover:text-indigo-600">Doctors</Link>
              <Link to="/contact" className="py-4 px-2 text-gray-700 hover:text-indigo-600">Contact</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <Link to="/login" className="py-2 px-3 bg-indigo-600 text-white rounded hover:bg-indigo-500">Login</Link>
          </div>
          <div className="md:hidden flex items-center">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

function MobileMenu(){
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow p-2">
          <Link to="/" onClick={()=>setOpen(false)} className="block px-2 py-1">Home</Link>
          <Link to="/about" onClick={()=>setOpen(false)} className="block px-2 py-1">About</Link>
          <Link to="/services" onClick={()=>setOpen(false)} className="block px-2 py-1">Services</Link>
          <Link to="/doctors" onClick={()=>setOpen(false)} className="block px-2 py-1">Doctors</Link>
          <Link to="/contact" onClick={()=>setOpen(false)} className="block px-2 py-1">Contact</Link>
          <Link to="/login" onClick={()=>setOpen(false)} className="block px-2 py-1 text-indigo-600">Login</Link>
        </div>
      )}
    </div>
  )
}

function Footer(){
  return (
    <footer className="bg-gray-50 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold">DocCare</h4>
          <p className="text-sm text-gray-600 mt-2">Easy appointments, trusted doctors.</p>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="text-sm text-gray-600 space-y-1 mt-2">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm text-gray-600 mt-2">support@doccare.example</p>
          <p className="text-sm text-gray-600">+91 98765 43210</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-4">© {new Date().getFullYear()} DocCare. All rights reserved.</div>
    </footer>
  );
}

function Home(){
  return (
    <main>
      <AppHelmet title="Home" description="DocCare — modern doctor portal for booking and managing appointments" />
      <section className="bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Find trusted doctors & book appointments online</h1>
            <p className="text-gray-700 mb-6">Instant bookings, secure records, consult from anywhere. Manage your health in one place.</p>
            <div className="flex gap-3">
              <Link to="/doctors" className="py-2 px-4 bg-indigo-600 text-white rounded">Find Doctors</Link>
              <Link to="/services" className="py-2 px-4 border rounded">Our Services</Link>
            </div>
          </div>
          <div>
            <div className="bg-white shadow rounded p-4">
              <h3 className="font-semibold mb-3">Quick Book</h3>
              <form className="grid gap-3">
                <input aria-label="search-specialty" className="border p-2 rounded" placeholder="Search by specialty (e.g., Cardiologist)" />
                <input aria-label="search-city" className="border p-2 rounded" placeholder="City" />
                <button className="py-2 px-4 bg-indigo-600 text-white rounded">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Top doctors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doctors.map(d => (
            <div key={d.id} className="bg-white rounded shadow p-4">
              <img src={d.img} alt={d.name} className="w-full" />
              <h3 className="mt-3 font-semibold">{d.name}</h3>
              <p className="text-sm text-gray-600">{d.specialty} • {d.experience} yrs</p>
              <div className="mt-3 flex justify-between items-center">
                <Link to={`/doctors/${d.id}`} className="text-indigo-600">View profile</Link>
                <Link to="/book" className="py-1 px-3 bg-indigo-600 text-white rounded text-sm">Book</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function About(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <AppHelmet title="About" description="About DocCare — our mission, vision and team" />
      <h1 className="text-3xl font-bold mb-4">About DocCare</h1>
      <p className="text-gray-700">DocCare is a simple and secure portal to help patients find doctors and manage appointments. Our mission is to make healthcare accessible.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Mission</h3>
          <p className="text-sm text-gray-600 mt-2">Deliver simple appointment management for busy lives.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Vision</h3>
          <p className="text-sm text-gray-600 mt-2">Bring trusted care to every community.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Values</h3>
          <p className="text-sm text-gray-600 mt-2">Privacy, trust and quality care.</p>
        </div>
      </div>
    </div>
  );
}

function Services(){
  const services = [
    {title: 'In-person Consultation', desc: 'Book an appointment at the clinic.'},
    {title: 'Teleconsultation', desc: 'Consult doctors online from home.'},
    {title: 'Health Packages', desc: 'Preventive health check-up packages.'},
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <AppHelmet title="Services" description="Services offered — in-person, teleconsultation and health packages" />
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.title} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Doctors(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <AppHelmet title="Doctors" description="Browse doctors by specialty and experience" />
      <h1 className="text-3xl font-bold mb-6">Doctors</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map(d => (
          <div key={d.id} className="bg-white p-4 rounded shadow">
            <img src={d.img} alt={d.name} className="w-full rounded-lg" />
            <h3 className="mt-3 font-semibold">{d.name}</h3>
            <p className="text-sm text-gray-600">{d.specialty}</p>
            <p className="text-sm text-gray-600">{d.experience} years experience • {d.rating} ★</p>
            <div className="mt-3 flex justify-between">
              <Link to={`/doctors/${d.id}`} className="text-indigo-600">Profile</Link>
              <Link to="/book" className="py-1 px-3 bg-indigo-600 text-white rounded text-sm">Book</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DoctorProfile(){
  const { id } = useParams();
  const doc = doctors.find(d => d.id === id) || doctors[0];
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <AppHelmet title={`${doc.name}`} description={`${doc.name} — ${doc.specialty} with ${doc.experience} years experience`} />
      <div className="bg-white rounded shadow p-6 grid md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <img src={doc.img} alt={doc.name} className="rounded w-full h-48 object-cover" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">{doc.name}</h2>
          <p className="text-gray-600">{doc.specialty} • {doc.experience} years experience</p>
          <p className="mt-4 text-gray-700">Biography: Dr. {doc.name.split(' ')[1]} is a highly experienced specialist in {doc.specialty} focused on patient-centered care.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/book" className="py-2 px-4 bg-indigo-600 text-white rounded">Book Appointment</Link>
            <a className="py-2 px-4 border rounded">Share</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookAppointment(){
  const navigate = useNavigate();
  const [form, setForm] = React.useState({name: '', email: '', phone: '', doctor: doctors[0].id, date: '', time: ''});
  function submit(e){
    e.preventDefault();
    // no backend — simulate confirmation
    alert(`Appointment requested for ${form.name} with ${form.doctor} on ${form.date} at ${form.time}`);
    navigate('/appointments');
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <AppHelmet title="Book Appointment" description="Book an appointment with a doctor" />
      <h1 className="text-2xl font-bold mb-4">Book Appointment</h1>
      <form onSubmit={submit} className="bg-white rounded shadow p-6 grid gap-3">
        <input required value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="border p-2 rounded" placeholder="Patient name" />
        <input required type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="border p-2 rounded" placeholder="Email" />
        <input required value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} className="border p-2 rounded" placeholder="Phone" />
        <select value={form.doctor} onChange={e=>setForm({...form, doctor: e.target.value})} className="border p-2 rounded">
          {doctors.map(d=> <option value={d.id} key={d.id}>{d.name} — {d.specialty}</option>)}
        </select>
        <div className="grid sm:grid-cols-2 gap-3">
          <input required type="date" value={form.date} onChange={e=>setForm({...form, date: e.target.value})} className="border p-2 rounded" />
          <input required type="time" value={form.time} onChange={e=>setForm({...form, time: e.target.value})} className="border p-2 rounded" />
        </div>
        <button type="submit" className="py-2 px-4 bg-indigo-600 text-white rounded">Request Appointment</button>
      </form>
    </div>
  );
}

function PatientDashboard(){
  // Mock patient info
  const patient = {name: 'Aditya Sahu', email: 'aditya@example.com'};
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <AppHelmet title="Dashboard" description="Patient dashboard — upcoming appointments and quick actions" />
      <h1 className="text-2xl font-bold">Welcome, {patient.name}</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Upcoming Appointment</h3>
          <p className="text-sm text-gray-600 mt-2">No upcoming appointments</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Medical Records</h3>
          <p className="text-sm text-gray-600 mt-2">You have 2 uploaded reports</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Prescriptions</h3>
          <p className="text-sm text-gray-600 mt-2">No active prescriptions</p>
        </div>
      </div>
    </div>
  );
}

function Appointments(){
  // Mock appointments
  const appts = [
    {id: 'a1', date: '2025-12-15', time: '10:00', doctor: doctors[0].name, status: 'Confirmed'},
    {id: 'a2', date: '2025-10-05', time: '14:00', doctor: doctors[1].name, status: 'Completed'},
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <AppHelmet title="Appointments" description="Your appointment history and details" />
      <h1 className="text-2xl font-bold mb-4">Appointment History</h1>
      <div className="space-y-4">
        {appts.map(a => (
          <div key={a.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <div className="font-semibold">{a.doctor}</div>
              <div className="text-sm text-gray-600">{a.date} • {a.time}</div>
            </div>
            <div className="text-sm text-gray-600">{a.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Login(){
  const navigate = useNavigate();
  const [mode, setMode] = React.useState('login');
  const [form, setForm] = React.useState({email: '', password: ''});
  function submit(e){
    e.preventDefault();
    alert(`${mode === 'login' ? 'Logged in' : 'Account created'}: ${form.email}`);
    navigate('/dashboard');
  }
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <AppHelmet title="Login" description="Login or register to access your dashboard" />
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-3">{mode === 'login' ? 'Login' : 'Register'}</h2>
        <form onSubmit={submit} className="grid gap-3">
          <input required type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="border p-2 rounded" placeholder="Email" />
          <input required type="password" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} className="border p-2 rounded" placeholder="Password" />
          <button className="py-2 px-4 bg-indigo-600 text-white rounded">{mode === 'login' ? 'Login' : 'Create account'}</button>
        </form>
        <div className="text-sm text-gray-600 mt-3">
          <button onClick={()=>setMode(mode === 'login' ? 'register' : 'login')} className="text-indigo-600">{mode === 'login' ? "Don't have an account? Register" : 'Already have an account? Login'}</button>
        </div>
      </div>
    </div>
  );
}

function Contact(){
  const [sent, setSent] = React.useState(false);
  function submit(e){
    e.preventDefault();
    setSent(true);
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <AppHelmet title="Contact" description="Get in touch with DocCare support" />
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      {!sent ? (
        <form onSubmit={submit} className="bg-white p-6 rounded shadow grid gap-3">
          <input required className="border p-2 rounded" placeholder="Name" />
          <input required type="email" className="border p-2 rounded" placeholder="Email" />
          <textarea required className="border p-2 rounded" placeholder="Message" rows={5}></textarea>
          <button className="py-2 px-4 bg-indigo-600 text-white rounded">Send</button>
        </form>
      ) : (
        <div className="bg-green-50 border border-green-200 p-4 rounded">Thanks — we'll get back to you shortly.</div>
      )}
    </div>
  );
}

export default function App(){
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorProfile />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/dashboard" element={<PatientDashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="p-8">Page not found. <Link to="/">Go home</Link></div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


