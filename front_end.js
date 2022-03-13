function copyMealId() {
  let copyText = document.getElementById('mealId');

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand('copy');

  document.getElementById('mealIdButton').innerText = 'Copied';
}

$('#pickupOrDelivery').change(function () {
  if ($(this).val() == 'Delivery') {
    $('#delivery-selected').show();
    $('#deliveryAddress').attr('required', '');
    $('#deliveryAddress').attr('data-error', 'This field is required.');
    $('#deliveryAddress2').attr('required', '');
    $('#deliveryAddress2').attr('data-error', 'This field is required.');
    $('#deliveryAddress4').attr('required', '');
    $('#deliveryAddress4').attr('data-error', 'This field is required.');
    $('#phoneNumber').attr('required', '');
    $('#phoneNumber').attr('data-error', 'This field is required.');
  } else {
    $('#delivery-selected').hide();
    $('#deliveryAddress').removeAttr('required');
    $('#deliveryAddress').removeAttr('data-error');
    $('#deliveryAddress2').removeAttr('required');
    $('#deliveryAddress2').removeAttr('data-error');
    $('#deliveryAddress4').removeAttr('required');
    $('#deliveryAddress4').removeAttr('data-error');
    $('#phoneNumber').removeAttr('required');
    $('#phoneNumber').removeAttr('data-error');
  }
});
$('#pickupOrDelivery').trigger('change');
