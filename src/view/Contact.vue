<template>
    <div class="hello">
      <h1>
          Having problems?
      </h1>
      <h3>
        Please send us a email so we can try to resolve you're problem
      </h3>
      <div class="container">
        <form action="contactForm.php">
          <label for="fname">First Name</label>
          <input type="text" class="fname" name="firstname" placeholder="Your name..">
          <label for="lname">Last Name</label>
          <input type="text" class="lname" name="lastname" placeholder="Your last name..">
          <label for="subject">Subject</label>
          <textarea class="subject" name="subject" placeholder="Write something.."></textarea>
          <button type="submit" value="Submit">
            Submit <i class='fas fa-comments'></i>
          </button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    msg: String
  }
}
</script>

<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */  
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type=submit] {
  width: 180px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  background-color: grey;
  color: white;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type=submit]:hover {
  color: grey;
  background-color: white;
  cursor: pointer;
}

/* Add height to the textarea */
.subject{
  height: 200px;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
}
</style>