package com.tez.kariyer.conf;

import com.tez.kariyer.service.JobPostingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
public class ShTask {
    @Autowired
    JobPostingService jobPostingService;
    @Scheduled(cron = "0 1 1 * * *", zone="Europe/Istanbul") //hergün  1:01 çalışır
    public void task(){
        System.out.printf("selam");
        jobPostingService.expiredJobs();
    }
}
