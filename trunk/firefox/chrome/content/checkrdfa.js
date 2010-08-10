<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<HTML>
<head>
<title>Order query : Firefox 1.5 Example</title>
<style type="text/css">
body, p {
	font-family: Verdana, sans-serif;
	font-size: 12px;
   	}
</style>
<script type="text/javascript">
function onLoad() {
	loadOnlyFirst();
}

function loadOnlyFirst() {
	alert("I am now testing RDFa");
}
</script>
</head>
<body onload="onLoad();" onpageshow="if (event.persisted) onPageShow();"> 
<h2>Order query</h2>

<form name="zipForm" action="http://www.example.com/formresult.html" method="get">
<label for="timefield">Date and time:</label>
<input type="text" id="timefield"><br>
<label for="name">Name:</label>
<input type="text" id="name"><br>
<label for="address">Email address:</label>
<input type="text" id="address"><br>
<label for="order">Order number:</label>
<input type="text" id="order"><br>
<input type="submit" name="submit" value="Submit Query"> 
</form>
</body>
</html>
