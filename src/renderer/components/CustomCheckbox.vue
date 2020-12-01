<template>
  <label class="checkbox-container" :id='id'>
    <div style="margin-left:20px;padding-bottom: 10px;"><slot name="body"></slot></div>
    <!-- used like this: -->
    <!-- <template v-slot:body>
    </template> -->
    <input type="checkbox" :checked="checked">
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'CustomCheckbox',
  props: {
    id: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
/* The checkbox-container */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 0px !important;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 15px;
  height: 22px;
  width: 22px;
  background-color: #fff;
  border: 3px solid #000;
  top: 23%;
  /* transform: translate(0, -50%); */
}

/* On mouse-over, add a grey background color */
.checkmark:hover {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkbox-container{
  border-top: 1px solid #e4ebf0;
}

.checkbox-container:hover{
  background-color: #F1F0ED !important;
}
</style>