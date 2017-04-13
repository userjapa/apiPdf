<?php
	$method;
	$url;
	$data = false;

	$curl = curl_init();
	
	curl_setopt($curl, CURLOPT_POST, 1);
	if ($data)
		curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	break;
?>


