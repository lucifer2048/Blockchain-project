import React from 'react'

export default function Navbar() {
  return (
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Project App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/home">Home</a>
        <a class="nav-link" href="#">Submissions</a>
        <a class="nav-link" href="#">About Us</a>
        <a class="nav-link" href="#">Default</a>
        <a class="nav-link" href="/registration">Sign Up</a>
      </div>
    </div>
  </div>
</nav>
  )
}
