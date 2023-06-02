import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App', () => {
  it('renders home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('Bienvenido a mi App')).toBeInTheDocument()
  })

  it('renders signup page', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('Registro')).toBeInTheDocument()
  })

  it('renders login page', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('Acceso')).toBeInTheDocument()
  })

  it('renders profile page when logged in', () => {
    const mockUser = { username: 'johndoe' }
    localStorage.setItem('user', JSON.stringify(mockUser))
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(`Bienvenido ${mockUser.username}`)).toBeInTheDocument()
  })

  it('redirects to login page when accessing profile page without authentication', () => {
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('Acceso')).toBeInTheDocument()
  })

  it('renders details page for a group', () => {
    const groupId = '123abc'
    render(
      <MemoryRouter initialEntries={[`/groups/${groupId}`]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(`Detalles del grupo con ID ${groupId}`)).toBeInTheDocument()
  })
})
