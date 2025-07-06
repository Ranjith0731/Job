package com.example.demo;

import java.util.List;

public interface JobService {
    Job createJob(JobDTO jobDTO);
    List<Job> getAllJobs();
}
