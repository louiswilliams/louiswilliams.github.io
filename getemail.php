<?php
	if ($_POST["e"] == "true"){
		echo "louis.w.work@gmail.com";
	}
	else{
		header($_SERVER["SERVER_PROTOCOL"] . " 403 Bad request");
	}
?>