package com.example.ud3_tarea4;

import android.os.Bundle;
import android.content.Intent;
import android.net.Uri;
import android.provider.MediaStore;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btnLlamada = findViewById(R.id.btnLlamada);
        Button btnCamara = findViewById(R.id.btnCamara);
        Button btnCorreo = findViewById(R.id.btnCorreo);

        btnLlamada.setOnClickListener(v -> {

            Intent ejemplo = new Intent(Intent.ACTION_DIAL);
            ejemplo.setData(Uri.parse("tel:600123456"));
            startActivity(ejemplo);

        });

        btnCamara.setOnClickListener(v -> {

            Intent ejemplo = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
            startActivity(ejemplo);

        });

        btnCorreo.setOnClickListener(v -> {

            Intent ejemplo = new Intent(Intent.ACTION_SEND);
            ejemplo.setType("text/plain");
            ejemplo.putExtra(Intent.EXTRA_EMAIL, new String[]{"destinatario@gmail.com"});
            ejemplo.putExtra(Intent.EXTRA_SUBJECT, "Prueba de Intent");
            ejemplo.putExtra(Intent.EXTRA_TEXT, "Este es un correo de prueba enviado desde Android.");
            startActivity(Intent.createChooser(ejemplo, "Enviar correo con:"));

        });
    }
}