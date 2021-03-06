
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Home Jen's Portfolio</title>
   <link rel="stylesheet" href="contact.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
   <body>
<div class="container">
       <div class="card card-body">
    <nav class="navigation">
      <ul>
        <li id="active">
          <a href="index.html" style="text-decoration: none;">
            Home
          </a>
        </li>
        <li id="active">
          <a href="updates.html" style="text-decoration: none;">
           Updates
          </a>
        </li>
         <li id="active">
          <a href="socialmedia.html" style="text-decoration: none;">
           Social Media
          </a>
        </li>
         <li id="active">
          <a href="portfolio.html" style="text-decoration: none;">
            Portfolio
          </a>
        <li id="active">
          <a href="contact.html" style="text-decoration: none;">
            Contact
          </a>
        </li>
      </ul>
    </nav>
         
    <main>
    <br />
    <h1>Send me a message 👩‍💻</h1>
    <br />
    <br />
         <div class="container">
        <form action="webform.php" method="POST" class="form">
            <div class="form-group">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Jane Doe" tabindex="1" required>
            </div>
            <div class="form-group">
                <label for="email" class="form-label">Your Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="jane@doe.com" tabindex="2" required>
            </div>
            <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="subject" name="subject" placeholder="Hello There!" tabindex="3" required>
            </div>
            <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" rows="5" cols="50" id="message" name="message" placeholder="Enter Message..." tabindex="4"></textarea>
            </div>
            <div>
                <button type="submit" class="btn">Send Message!</button>
            </div>
        </form>
      </main>
      
      <footer>
      <div>
          <p>
              Alternatively get in touch with me via 
              <br />
        <a target="_blank" href="https://www.instagram.com/prettylittledeveloper/"><i class="fa fa-instagram" style="font-size:30px;color:#C53B91"></i></a>
        <a target="blank" href="https://twitter.com/PLD_Jen"><i class="fa fa-twitter-square" style="font-size:30px; color:#3291DA"></i></a>
        <a target="blank" href="https://www.linkedin.com/in/jen-whitfield-2018/"><i class="fa fa-linkedin-square" style="font-size:30px; color:#1666C2"></i></a>    
    </p>
      </div>
      </footer>

  </body>
  <script>

  </script>
</html>
