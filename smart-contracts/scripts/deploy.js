

const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Lock");
  const transaction = await Transactions.deploy();

  await transaction.deployed();

  console.log(`Transaction deployed to ${transaction.address}`);
}


const runMain = async  () =>{
  try {
      await main();
      process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
}

runMain()