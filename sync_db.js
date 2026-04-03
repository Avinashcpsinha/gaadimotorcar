const { spawn } = require('child_process');

const push = spawn('npx', ['drizzle-kit', 'push'], {
  cwd: 'c:\\xampp\\htdocs\\gaadimotorcar',
  shell: true,
});

push.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(output);
  
  if (output.includes('Is leads table created') || 
      output.includes('Is logo_url column') || 
      output.includes('Is description column') || 
      output.includes('Is make column') || 
      output.includes('Is model column') || 
      output.includes('Is year column') || 
      output.includes('Is price column') || 
      output.includes('Is fuel_type column') || 
      output.includes('Is transmission column') || 
      output.includes('Is kms_driven column') || 
      output.includes('Is location column') || 
      output.includes('Is main_image column') || 
      output.includes('Is category column') || 
      output.includes('Is is_featured column') || 
      output.includes('Is created_at column')) {
    push.stdin.write('\n');
  }
  
  if (output.includes('Do you still want to push changes?')) {
    // Send Arrow Down then Enter
    push.stdin.write('\u001b[B\n');
  }
});

push.stderr.on('data', (data) => {
  console.error(data.toString());
});

push.on('close', (code) => {
  console.log(`Command exited with code ${code}`);
});
