const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (!Number(args[i])) {
}  else if (Number(args[i]) < 0) {
}   else
        setTimeout(() => {
        process.stdout.write('\x07')
    },  args[i] * 1000)
}