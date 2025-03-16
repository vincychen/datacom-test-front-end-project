import React from 'react';
import { render, screen } from '@testing-library/react';
import JobApplicationTable from '../JobApplicationTable';
import { ApplicationStatus, JobApplication } from '../jobApplicationDataType';

const jobApplications: JobApplication[] = [
  {
    id: 1,
    companyName: 'Company A',
    position: 'Developer',
    status: ApplicationStatus.INITIAL,
    dateApplied: '2025-03-16',
  },
  {
    id: 2,
    companyName: 'Company B',
    position: 'Designer',
    status: ApplicationStatus.INTERVIEW,
    dateApplied: '2025-03-17',
  },
];

test('renders JobApplicationTable with job applications', () => {
  render(<JobApplicationTable jobApplications={jobApplications} />);
  
  expect(screen.getByText('Job Application')).toBeTruthy();
  expect(screen.getByText('Company A')).toBeTruthy();
  expect(screen.getByText('Developer')).toBeTruthy();
  expect(screen.getByText('Applied')).toBeTruthy();
  expect(screen.getByText('Sun Mar 16 2025')).toBeTruthy();
  
  expect(screen.getByText('Company B')).toBeTruthy();
  expect(screen.getByText('Designer')).toBeTruthy();
  expect(screen.getByText('Interview')).toBeTruthy();
  expect(screen.getByText('Mon Mar 17 2025')).toBeTruthy();
});

test('renders DropDownButton for each job application', () => {
  render(<JobApplicationTable jobApplications={jobApplications} />);
  
  const dropdownButtons = screen.getAllByText('Edit');
  expect(dropdownButtons).toHaveLength(jobApplications.length);
});