
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { apiUrl } from '../../config/api';
import './newsletter.scss';

export const Newsletter = () => {

  const [email, setEmail] = useState<string>('');

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) return;

    try {
      const res = await fetch(`${apiUrl}/newsletter`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      const data = await res.json();

      if (data.message) {
        toast.info(data.message)
      }

    } catch (error) {
      console.log(error)
    }
    finally {
      setEmail('');
    }
  }

  return (
    <section className="newsletter">

      <form onSubmit={formSubmit}>
        <h3>subscribe for latest updates</h3>
        <input type="email" placeholder="enter your email" id="" className="box"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input type="submit" value="subscribe" className="btn" />
      </form>

    </section>
  )
}