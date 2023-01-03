package com.latestsampleapp;

import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.webengage.sdk.android.WebEngage;

import java.util.Map;

public class InitialFirebase extends MyFirebaseMessagingSerice {
    @Override
    public void onNewToken(@NonNull String token) {
        super.onNewToken(token);
        Log.d("Akshay", "Called Inital on New Token -> "+ token);
//        Toast.makeText(this, "Initial Firebase called for onNewToken", Toast.LENGTH_SHORT).show();
//        WebEngage.get().setRegistrationID(token);
    }

    @Override
    public void onMessageReceived(@NonNull RemoteMessage message) {
        super.onMessageReceived(message);
        Log.d("Akshay", "Called Inital onMessage Received-> "+ message.toString());
//        Toast.makeText(this, "MessageReceived - InitialFirebase", Toast.LENGTH_SHORT).show();

//        Map<String, String> data = message.getData();
//        if(data != null) {
//            if(data.containsKey("source") && "webengage".equals(data.get("source"))) {
//                WebEngage.get().receive(data);
//            }
//        }
    }
}
