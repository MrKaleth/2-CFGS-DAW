package com.example.ud3_tarea5;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btnDestruir = findViewById(R.id.btnDestruir);

        btnDestruir.setOnClickListener(v -> finish());
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        try {
            Uri gmmIntentUri = Uri.parse("geo:0,0?q=Mairena+del+Aljarafe");

            Intent mapIntent = new Intent(Intent.ACTION_VIEW, gmmIntentUri);

            mapIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

            startActivity(mapIntent);

        } catch (Exception e) {
            Log.e("MainActivity", "No se pudo abrir el mapa: " + e.getMessage());
        }
    }
}