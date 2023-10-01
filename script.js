let buttonn = document.getElementById('button')

buttonn.addEventListener('click',() => {
    const berat = parseInt(document.getElementById('berat').value);
    const tinggi = parseInt(document.getElementById('tinggi').value);
    const hasil = document.getElementById('hasil');
    let status_tinggi=false, status_berat=false;

    if(tinggi === '' || isNaN(tinggi) || (tinggi <= 0)){
        document.getElementById('tinggi_error').innerHTML = 'Masukkan tinggi anda';
    }else{
        document.getElementById('tinggi_error').innerHTML = '';
        status_tinggi=true;
    }
    
    if(berat === '' || isNaN(berat) || (berat <= 0)){
        document.getElementById('berat_error').innerHTML = 'Masukkan berat anda';
    }else{
        document.getElementById('berat_error').innerHTML = '';
        status_berat=true;
    }

    if(status_tinggi && status_berat){
        const bmi = (berat/((tinggi/100)**2)).toFixed(2);
        console.log(bmi)
        if(bmi < 18.5) {
            hasil.innerHTML = 'Your BMI is ' + bmi + ' which means You Are Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9){
            hasil.innerHTML = 'Your BMI is ' + bmi + ' which means You Are Normal Weight';
        } else if (bmi >= 25 && bmi <= 29.9){
            hasil.innerHTML = 'Your BMI is ' + bmi + ' which means You Are Overweight';
        } else if (bmi > 30) {
            hasil.innerHTML = 'Your BMI is ' + bmi + ' which means You Are Obesity';
        }

    } else {
        alert('The Form has Errors');
        warnabg
        hasil.innerHTML = "";
    }
});