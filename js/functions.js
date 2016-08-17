var WsEndPoint = "http://lozen.tonico.mx/backend/";
var WsEndPointMethod = "POST";

// Contact Functions
function doSendContactMsg(type, lang)
{
	switch (type)
	{
		case 'quote':
			var formData = {
				formType						: 'quote',
				formCompany					: $('#frmCompany').val(),
				formName						: $('#frmName').val(),
				formPhone						: $('#frmPhone').val(),
				formEmail						: $('#frmEmail').val(),
				formService					: $('#frmService').val(),
				formContainer				: $('#frmContainer').val(),
				formOrigin					: $('#frmOrigin').val(),
				formDestiny					: $('#frmDestiny').val(),
				formEstimateFare		: $('#frmEstimateRate').val(),
				formMessage					: $('#frmMessage').val()
			};
			break;

		case 'contact':
			var formData = {
				formType						: 'contact',
				formName						: $('#frmName').val(),
				formEmail						: $('#frmEmail').val(),
				formCompany					: $('#frmCompany').val(),
				formMessage					: $('#frmMessage').val()
			};
			break;

		case 'team':
			var formData = {
				formType						: 'team',
				formName						: $('#frmName').val(),
				formEmail						: $('#frmEmail').val(),
				formCompany					:	$('#frmCompany').val(),
				formMessage					:	$('#frmMessage').val()
			};
			break;
	}

	var validated = 0;
	switch (lang){
		case 'sp':
			switch (type) {
				case 'contact':
					if ( !$('#frmName').val().length ) doShowModal('El nombre es mandatorio');
					else if ( !$('#frmEmail').val().length ) doShowModal('El email es mandatorio');
					else if ( !$('#frmCompany').val().length ) doShowModal('La compañia es mandatoria');
					else if ( !$('#frmMessage').val().length ) doShowModal('El mensaje es mandatorio');
					else validated = 1;
				break;

				case 'quote':
					if ( !$('#frmCompany').val().length ) doShowModal('La compañia es mandatoria');
					else if ( !$('#frmName').val().length ) doShowModal('El nombre es mandatorio');
					else if ( !$('#frmPhone').val().length ) doShowModal('El telefono es mandatorio');
					else if ( !$('#frmEmail').val().length ) doShowModal('El email es mandatorio');
					else if ( !$('#frmService').val().length ) doShowModal('El servicio es mandatorio');
					else if ( !$('#frmContainer').val().length ) doShowModal('El contenedor es mandatorio');
					else if ( !$('#frmOrigin').val().length ) doShowModal('El origen es mandatorio');
					else if ( !$('#frmDestiny').val().length ) doShowModal('La destino es mandatorio');
					else if ( !$('#frmEstimateRate').val().length ) doShowModal('La tarifa estimada es mandatoria');
					else if ( !$('#frmMessage').val().length ) doShowModal('El mensaje es mandatorio');
					else validated = 1;
				break;

				case 'team':
					if ( !$('#frmName').val().length ) doShowModal('El nombre es mandatorio');
					else if ( !$('#frmEmail').val().length ) doShowModal('El email es mandatorio');
					else if ( !$('#frmCompany').val().length ) doShowModal('La compañia es mandatoria');
					else if ( !$('#frmMessage').val().length ) doShowModal('El mensaje es mandatorio');
					else validated = 1;
				break;
			}
			break;

		case 'en':
			switch (type) {
				case 'contact':
					if ( !$('#frmName').val().length ) doShowModal('The name is mandatory');
					else if ( !$('#frmEmail').val().length ) doShowModal('The email is mandatory');
					else if ( !$('#frmCompany').val().length ) doShowModal('The company is mandatory');
					else if ( !$('#frmMessage').val().length ) doShowModal('The message is mandatory');
					else validated = 1;
				break;

				case 'quote':
					if ( !$('#frmCompany').val().length ) doShowModal('The company is mandatory');
					else if ( !$('#frmName').val().length ) doShowModal('The name is mandatory');
					else if ( !$('#frmPhone').val().length ) doShowModal('The phone is mandatory');
					else if ( !$('#frmEmail').val().length ) doShowModal('The email is mandatory');
					else if ( !$('#frmService').val().length ) doShowModal('The service is mandatory');
					else if ( !$('#frmContainer').val().length ) doShowModal('The container is mandatory');
					else if ( !$('#frmOrigin').val().length ) doShowModal('The origin is mandatory');
					else if ( !$('#frmDestiny').val().length ) doShowModal('The destiny is mandatory');
					else if ( !$('#frmEstimateRate').val().length ) doShowModal('The estimated fare is mandatory');
					else if ( !$('#frmMessage').val().length ) doShowModal('The message is mandatory');
					else validated = 1;
				break;

				case 'team':
					if ( !$('#frmName').val().length ) doShowModal('The name is mandatory');
					else if ( !$('#frmEmail').val().length ) doShowModal('The email is mandatory');
					else if ( !$('#frmCompany').val().length ) doShowModal('The company is mandatory');
					else if ( !$('#frmMessage').val().length ) doShowModal('The message is mandatory');
					else validated = 1;
				break;
			}
			break;
	}

	if (formData && validated)
		$.ajax({
			type: WsEndPointMethod,
			url: WsEndPoint+"wsContact.php",
			data: {formData : formData },
			dataType: "json",
			beforeSend: function(data) {
			},
			success: function(response) {
				var msg = '';
				switch (lang){
					case 'sp': msg = 'Gracias por su mensaje. Lo contactaremos en breve.'; break;
					case 'en': msg = 'Thanks for your message. We will contact you soon.'; break;
				}
				
				doShowModal(msg);
				$('#form')[0].reset();
			},
			error: function(xhr, desc, err) {
				console.log('Webservice Error - doSendContactMsg: '+desc+' - '+err);
				doShowModal('Hubo un error al enviar tu mensaje. Intenta nuevamente.');
			}
		});
}

function doShowModal(msg){
	$('#modalText').text(msg);
	$('#openModal')[0].click();
}
