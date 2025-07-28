# trueque-joven
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Trueque Joven</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f9f2e7; margin: 0; padding: 0; }
    header { background-color: #ffbb33; padding: 20px; text-align: center; }
    h1 { margin: 0; color: #fff; }
    .item { border: 1px solid #ccc; padding: 15px; margin: 10px; background: #fff8e1; }
    .filtros { margin: 20px; }
    .chat { margin-top: 20px; background: #dcedc8; padding: 10px; }
  </style>
</head>
<body>

<header>
  <h1>🛍️ Trueque Joven</h1>
</header>

<div class="filtros">
  <label>Categoría:</label>
  <select>
    <option>Ropa</option>
    <option>Libros</option>
    <option>Útiles</option>
  </select>

  <label>Ubicación:</label>
  <select>
    <option>Barcelona</option>
    <option>Madrid</option>
    <option>Valencia</option>
  </select>
</div>

<div class="item">
  <h2>📚 Libro: "Cien años de soledad"</h2>
  <p>Ubicación: Barcelona</p>
  <button onclick="abrirChat('Carlos')">Contactar</button>
</div>

<div class="item">
  <h2>👕 Camiseta vintage</h2>
  <p>Ubicación: Madrid</p>
  <button onclick="abrirChat('Lucía')">Contactar</button>
</div>

<div id="chatArea" class="chat" style="display:none;"></div>

<script>
  function abrirChat(usuario) {
    document.getElementById("chatArea").style.display = "block";
    document.getElementById("chatArea").innerHTML = `<p>Chat con ${usuario}</p><input type='text' placeholder='Escribe tu mensaje...'/>`;
  }
</script>

</body>
</html>
