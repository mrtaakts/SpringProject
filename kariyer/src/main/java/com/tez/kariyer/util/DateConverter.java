package com.tez.kariyer.util;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;

public class DateConverter {

    public static Date StringToDatewithHH(String date) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm");
        if(date==null){
            return new Timestamp(System.currentTimeMillis());
        }
        try {
           Date dt = formatter.parse(date);

            return dt;

        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Date StringToDatewith(String date) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        if(date==null){
            return new Timestamp(System.currentTimeMillis());
        }
        try {
            Date dt = formatter.parse(date);

            return dt;

        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String DatetoString(Date date) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        String dt = formatter.format(date);
        return dt;

    }

    public static XMLGregorianCalendar stringToXmlCalendar(String date){
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        try {
            Date dt = formatter.parse(date);
            GregorianCalendar bas = new GregorianCalendar();
            bas.setTime(dt);
            XMLGregorianCalendar xmlCalendar = DatatypeFactory.newInstance().newXMLGregorianCalendar(bas);
            return xmlCalendar;


        } catch (ParseException e) {
            e.printStackTrace();
        } catch (DatatypeConfigurationException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String StringToClock(Date date) {
        SimpleDateFormat formatter = new SimpleDateFormat("HH:mm");
        String ck = formatter.format(date);
        return ck;

    }


}
