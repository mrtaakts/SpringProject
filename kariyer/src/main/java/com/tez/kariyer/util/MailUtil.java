package com.tez.kariyer.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Controller
public class MailUtil {

    @Autowired
    private JavaMailSender mailSender;

    public String sendMail(String mailTo,String text, String subject) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);


        try {
            messageHelper.setTo(mailTo);
            messageHelper.setText(text,true);
            messageHelper.setSubject(subject);
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Error...";
        }
        mailSender.send(mimeMessage);
        return "Mail Sent!";
    }

}
