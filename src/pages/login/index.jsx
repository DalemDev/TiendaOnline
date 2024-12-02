import { useState } from 'react'

export default function index() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>index</div>
  )
}
