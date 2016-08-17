<?php
header('Access-Control-Allow-Origin: *');

// Swift Mailer Library
require_once 'swiftmailer/lib/swift_required.php';
$pEmailGmail = 'sales@lozen.com.mx';
$pPasswordGmail = 'Lzsal2017';
$pFromName = 'sales@lozen.com.mx';

if ( $_POST['formData']['formType'] ) // Todo: Add AntiSpam Validation
{
	switch ( $_POST['formData']['formType'] )
	{
		case 'contact':
			$emailTemplate = 'Throught the contact form,' . $_POST['formData']['formName'] . ' has tried to contact you. <br><br> Here is the information: <br><br>'.
					' Full Name : '	. $_POST['formData']['formName'] 	. '<br>'.
					' Email: ' 		. $_POST['formData']['formEmail'] 	. '<br>'.
					' Company: '	. $_POST['formData']['formCompany']	. '<br>'.
					' Message: '	. $_POST['formData']['formMessage']	. '<br>';
			break;

		case 'quote':
			$emailTemplate = 'Throught the quote form,' . $_POST['formData']['formName'] . ' has tried to contact you. <br><br> Here is the information: <br><br>'.
					' Full Name : ' . $_POST['formData']['formName']        . '<br>'.
                    ' Email: '      . $_POST['formData']['formEmail']       . '<br>'.
                    ' Company: '    . $_POST['formData']['formCompany']     . '<br>'.
					' Phone: '    	. $_POST['formData']['formPhone']     	. '<br>'.
					' Service: '    . $_POST['formData']['formService']     . '<br>'.
					' Container: '  . $_POST['formData']['formContainer']   . '<br>'.
					' Origin: '    	. $_POST['formData']['formOrigin']      . '<br>'.
					' Destiny: '    . $_POST['formData']['formDestiny']     . '<br>'.
					' Est. Fare:' 	. $_POST['formData']['formEstimateFare']. '<br>'.
                    ' Message: '    . $_POST['formData']['formMessage']     . '<br>';
			break;

		case 'team':
			$emailTemplate = 'Throught the contact form,' . $_POST['formData']['formName'] . ' has tried to contact you. <br><br> Here is the information: <br><br>'.
					' Full Name : '	. $_POST['formData']['formName'] 	. '<br>'.
					' Email: ' 		. $_POST['formData']['formEmail'] 	. '<br>'.
					' Company: '	. $_POST['formData']['formCompany']	. '<br>'.
					' Message: '	. $_POST['formData']['formMessage']	. '<br>';
			break;
	}

	switch ( $_POST['formData']['formType'] )
	{
		case 'contact': 	$Recipent = 'sales@lozen.com.mx';	break;
		case 'quote': 		$Recipent = 'sales@lozen.com.mx';	break;
		case 'team': 		$Recipent = 'sales@lozen.com.mx';	break;
		default: 			$Recipent = 'sales@lozen.com.mx';
	}
	$pTo = $Recipent;
	$pSubjetc = $_POST['formData']['formType'];

	$transport = Swift_SmtpTransport::newInstance('mail.lozen.com.mx', 26)
	            ->setUsername($pEmailGmail)
	            ->setPassword($pPasswordGmail);

	$mMailer = Swift_Mailer::newInstance($transport);

	$mEmail = Swift_Message::newInstance();
	$mEmail->setSubject($pSubjetc);
	$mEmail->setTo($pTo);
	$mEmail->setFrom(array($pEmailGmail => $pFromName));
	$mEmail->setBody($emailTemplate, 'text/html');

	if ($_FILES['attachment'])
		$mEmail->attach(Swift_Attachment::fromPath($_FILES['attachment']['tmp_name'])->setFilename($_FILES['attachment']['name']));

	if($mMailer->send($mEmail) == 1){
		echo json_encode('Message Sent');
		die();
	}
	else {
		echo json_encode('There was an error sending your message.');
		die();
	}
}
else
{
	echo json_encode('Not Authorized');
}
?>