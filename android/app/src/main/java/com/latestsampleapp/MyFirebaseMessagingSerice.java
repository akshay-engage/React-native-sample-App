package com.latestsampleapp;

import android.util.Log;

import androidx.annotation.NonNull;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.webengage.sdk.android.WebEngage;

import java.util.Map;

public class MyFirebaseMessagingSerice extends FirebaseMessagingService {
    @Override
    public void onNewToken(@NonNull String token) {
        super.onNewToken(token);
        WebEngage.get().setRegistrationID(token);
    }

    @Override
    public void onMessageReceived(@NonNull RemoteMessage message) {
        Log.d("Akshay","Message receieved");
        super.onMessageReceived(message);
        Map<String, String> data = message.getData();
        if(data != null) {
            if(data.containsKey("source") && "webengage".equals(data.get("source"))) {
                WebEngage.get().receive(data);
            }
        }
    }
}
