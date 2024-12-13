'use client'
import styles from './page.module.css'

import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [message, setMessage] = useState('')
  const [message2, setMessage2] = useState('')

  const handleCreateDatabase = async () => {
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/create-database', {
        method: 'POST',
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
      } else {
        setMessage(data.error || 'خطایی رخ داده است.')
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('خطایی در ارتباط با سرور رخ داده است.')
    } finally {
      setLoading(false)
    }
  }

  const handleGet = async () => {
    setLoading2(true)
    setMessage2([])

    try {
      const response = await fetch('/api/get', {
        method: 'GET',
      })

      const result = await response.json()

      if (response.ok) {
        console.log(result.data)
        setMessage2(result.data[0]) // داده‌ها به طور مستقیم ذخیره می‌شوند
      } else {
        setMessage2([{ error: result.error || 'خطایی رخ داده است.' }])
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage2([{ error: 'خطایی در ارتباط با سرور رخ داده است.' }])
    } finally {
      setLoading2(false)
    }
  }

  return (
    <div className={styles.container} style={{ padding: '2rem' }}>
      <h1>ایجاد Namespace و Database در SurrealDB</h1>
      <button
        onClick={handleCreateDatabase}
        disabled={loading}
        style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}
      >
        {loading ? 'در حال انجام...' : 'ایجاد Namespace و Database'}
      </button>
      <button
        onClick={handleGet}
        disabled={loading}
        style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}
      >
        {loading ? 'در حال انجام...' : 'ایجاد GET و GET'}
        {/* {message2 && <div>this is data : {message2[0].city}</div>} */}
      </button>
      {message2 && message2.map((msg, index) => <div key={index}>this is data : {msg.city}</div>)}
      {console.log(message2[0], "erfan")}
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  )
}
