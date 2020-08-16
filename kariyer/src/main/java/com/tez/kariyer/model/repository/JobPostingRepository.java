package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.JobPosting;
import org.springframework.data.repository.CrudRepository;

public interface JobPostingRepository extends CrudRepository<JobPosting,Integer> {
}
